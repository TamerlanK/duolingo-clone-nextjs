declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      STRIPE_API_KEY: string
      NEXT_PUBLIC_APP_URL: string
      STRIPE_WEBHOOK_SECRET: string
    }
  }
}

export {}
