# Code Creador

Next.js application configured for deployment on Netlify.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Netlify deployment

Netlify supports this Next.js App Router project directly. Use:

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js: 22

The project includes `netlify.toml` with these settings.

### Environment variables

Add these variables in Netlify:

```text
SMTP_USER=your-sender-email
SMTP_PASS=your-smtp-or-app-password
RECIPIENT_EMAIL=your-recipient-email
```

Contact and unsubscribe API routes no longer require the previous database layer. They validate the submitted data and send the request by email through the configured SMTP account.

## Important

There is no the previous database layer/the previous database layer dependency, connection, model, or environment variable in this project.
