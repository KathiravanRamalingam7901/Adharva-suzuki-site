'use server'

import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const {
      name,
      email,
      phone,
      address,
      position,
      positionTitle,
      hasResume,
    } = data as {
      name: string
      email: string
      phone: string
      address: string
      position: string
      positionTitle?: string
      hasResume?: boolean
    }

    const lines = [
      `New career application received from Adharvaa Suzuki website:`,
      '',
      `Name       : ${name}`,
      `Email      : ${email}`,
      `Phone      : ${phone}`,
      `Position   : ${positionTitle || position}`,
      '',
      `Address:`,
      address,
      '',
      `Resume uploaded: ${hasResume ? 'Yes (file name shown on UI only)' : 'No'}`,
    ]

    // In a real deployment, integrate with an email service (SendGrid, SMTP, etc.)
    // For now we just log the composed message so it can be wired to an email provider later.
    console.log('CAREER APPLICATION TO: admin.suzuki@adarvaa.in\n\n' + lines.join('\n'))

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error handling career application', error)
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}


