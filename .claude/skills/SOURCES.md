# Skill sources

Copied from https://github.com/dawitlabs/ui-skills at commit `6973cc6df7772780d31a4891fb60859f53f3e0b2` (MIT, see `LICENSE-ui-skills`):
a11y, animate, copy, design-grill, landing, tokens, ui-design-principles, uicolor, uiux.

Not copied: `ui-init` (its setup is recorded in `CLAUDE.md` instead).

Local change: `ui-design-principles/SKILL.md` had no frontmatter, so a `name`/`description` block was added
(`user-invocable: false`, since it is reference material, not a command). Everything else is unmodified.

The official `frontend-design` skill is not copied here. It is enabled as a plugin from the
`anthropics/claude-code` marketplace in `.claude/settings.json`.

Copied unmodified from https://github.com/Leonxlnx/taste-skill at commit `d237dd3` (MIT, see `LICENSE-taste-skill`),
each into a folder named after its install name:
- `skills/taste-skill` → `design-taste-frontend`
- `skills/redesign-skill` → `redesign-existing-projects`
- `skills/soft-skill` → `high-end-visual-design`

Not copied from taste-skill: the v1 and gpt-taste variants (duplicates of the main skill), the brutalist and
minimalist styles (aesthetics that conflict with the brand), the image-generation skills, brandkit and
image-to-code (they generate imagery or logos, which the brand rules forbid), stitch (Google Stitch only)
and output-skill (not design related).

VoltAgent/awesome-design-md has no skills: it is a collection of DESIGN.md files describing other companies'
sites, so nothing from it is installed.
