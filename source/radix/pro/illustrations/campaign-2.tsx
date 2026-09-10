export const Campaign2Illustration = () => (
  <div
    aria-hidden
    className="group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10 before:bg-background after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-foreground/5 after:bg-card after:opacity-75"
  >
    <div className="border-border-illustration relative z-10 h-full rounded-t-2xl border bg-card p-4 pb-10 text-xs shadow-lg shadow-black/6.5 transition-shadow duration-300">
      <div className="mb-0.5 text-sm font-semibold">Compaign</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span>Loyalty program</span>
        <span className="text-muted-foreground">loyalty program</span>
      </div>
      <div className="mb-4 grid gap-2 @md:grid-cols-2">
        <div className="bg-illustration border-border-illustration flex gap-2 rounded-md border p-2">
          <div className="w-1 rounded-full bg-primary"></div>

          <div>
            <div className="text-sm font-medium">Start Date</div>
            <div className="line-clamp-1 text-muted-foreground">
              Feb 6, 2024 at 00:00
            </div>
          </div>
        </div>
        <div className="bg-illustration border-border-illustration flex gap-2 rounded-md border p-2">
          <div className="w-1 rounded-full bg-primary"></div>

          <div>
            <div className="text-sm font-medium">Start Date</div>
            <div className="line-clamp-1 text-muted-foreground">
              Feb 6, 2024 at 00:00
            </div>
          </div>
        </div>
      </div>

      <p>
        Connected to 12{" "}
        <span className="font-medium text-primary">Marketing Campaigns</span>.
      </p>
    </div>
  </div>
)

export default Campaign2Illustration
