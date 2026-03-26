import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      province,
      growType,
      experience,
      setup,
      previousStrains,
      photoLink,
      whyJoin,
    } = body

    const { data, error } = await resend.emails.send({
      from: 'Free Seeds Application <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@gmail.com',
      subject: `New Free Seeds Application from ${name}`,
      html: `
        <h2>New Free Seeds Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Province:</strong> ${province}</p>
        <p><strong>Grow Type:</strong> ${growType}</p>
        <p><strong>Experience Level:</strong> ${experience}</p>
        <h3>Setup Details</h3>
        <p>${setup}</p>
        <h3>Previous Strains Grown</h3>
        <p>${previousStrains || 'Not provided'}</p>
        <h3>Photo Link</h3>
        <p>${photoLink || 'Not provided'}</p>
        <h3>Why They Want to Join</h3>
        <p>${whyJoin}</p>
        <hr />
        <p><em>Reply directly to this email to contact the applicant at ${email}</em></p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
