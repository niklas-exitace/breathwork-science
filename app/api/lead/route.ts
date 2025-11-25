import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, variant, concept } = body

    // TODO: Connect to your CRM/email service
    // Examples:
    // - Mailchimp
    // - ConvertKit
    // - Klaviyo
    // - Custom database

    console.log('Lead captured:', { email, variant, concept })

    // Return success with PDF URL
    return NextResponse.json({
      success: true,
      leadId: `lead_${Date.now()}`,
      pdfUrl: `/guides/${concept}/science-protocol.pdf`,
      variant
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to capture lead' },
      { status: 500 }
    )
  }
}
