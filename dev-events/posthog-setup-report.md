<wizard-report>
# PostHog post-wizard report

The wizard has completed the integration of PostHog analytics into the DevEvents Next.js 15.3 App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new file): Initializes PostHog on the client side using the Next.js 15.3+ recommended approach. Includes exception capture for error tracking and debug mode in development.
- **`next.config.ts`**: Added reverse-proxy rewrites so PostHog ingestion requests are routed through `/ingest/*`, avoiding ad-blocker interference and improving data reliability.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).
- **`components/ExploreBtn.tsx`**: Added `posthog.capture('explore_events_clicked')` when the user clicks the "Explore Events" button — the top of the conversion funnel.
- **`components/EventCard.tsx`**: Added `'use client'` directive and `posthog.capture('event_card_clicked', {...})` with properties (`event_title`, `event_slug`, `event_location`, `event_date`) when a user clicks an event card.

| Event | Description | File |
|-------|-------------|------|
| `explore_events_clicked` | User clicks the "Explore Events" button on the home page — top of the conversion funnel | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details — key browsing funnel step | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/372781/dashboard/1441318
- **Event Discovery Trend** (explore clicks vs card clicks over time): https://us.posthog.com/project/372781/insights/M5IeVqLf
- **Most Clicked Events** (event cards ranked by clicks): https://us.posthog.com/project/372781/insights/R7iAlq9d
- **Explore to Event Click Funnel** (conversion from explore button to event card): https://us.posthog.com/project/372781/insights/RifQ37x9

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
