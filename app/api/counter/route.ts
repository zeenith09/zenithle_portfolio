import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type Data = {
  count: number
}

export async function GET() {
  // Path to the JSON file
  const filePath = path.join(process.cwd(), 'lib/data/visit-count.json')

  // Read current count safely
  let data: Data = { count: 0 }
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    data = JSON.parse(raw) as Data
  } catch (err) {
    // File might not exist yet, create it later
    console.warn('visit-count.json missing or invalid, starting at 0')
  }

  data.count += 1

  // Save back
  try {
    fs.writeFileSync(filePath, JSON.stringify(data))
  } catch (err) {
    console.error('Failed to write visit-count.json', err)
    return NextResponse.json({ count: data.count })
  }

  // Return JSON
  return NextResponse.json({ count: data.count })
}
