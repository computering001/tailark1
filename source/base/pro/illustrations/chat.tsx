export const ChatIllustration = () => {
  return (
    <div aria-hidden className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Sat 22 Feb</span>
        </div>
        <div className="mt-1.5 w-3/5 rounded-lg rounded-tl bg-illustration p-3 text-xs shadow ring-1 ring-foreground/5">
          Hey, I'm having trouble with my account.
        </div>
      </div>

      <div>
        <div className="mb-1 ml-auto w-3/5 rounded-lg rounded-br bg-primary p-3 text-xs text-white shadow inset-ring-1 shadow-black/15 inset-ring-foreground/10">
          Distinctio provident nobis repudiandae deleniti necessitatibus.
        </div>
        <span className="block text-right text-xs text-muted-foreground">
          Now
        </span>
      </div>
    </div>
  )
}

export default ChatIllustration
