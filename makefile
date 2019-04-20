test:
	start web-ext run -p "%APPDATA%/Mozilla/Firefox/Profiles/debug" --keep-profile-changes --browser-console

sign:
	web-ext sign -i creds web-ext-artifacts marketing screen.png logo.jpg *.md *.iml updates.json `cat $(HOME)/.amo/creds`
