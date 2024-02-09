import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GoogleProvider.default({
           clientId: '73830782968-obklojqj3oh6fnvuma60eqednganv1hl.apps.googleusercontent.com',
           clientSecret: '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'
        })
    ]
})