<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## App structure
- Keep the restored supplied Index as a single scrolling page with its original anchors; preserving the source's navigation is the restoration goal.
- Put recreated celebration data in `src/lib/celebrations.ts` and supporting presentation in `src/components/balloon/`; the uploaded Index imports these modules.
- Define all visual tokens and animations in `src/styles.css`; this keeps the recreated design consistent.
- Until real contact details are supplied, contact actions lead to the concierge and enquiries explicitly remain unsent; never invent a recipient.
