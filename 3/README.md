# vu_psi_3
3 PSI laboras

#Before doing stuff
```
Accept Invite to GitRepository from email
Open Github.com and copy link from green button "Copy and Download"
Open Git Bash (where you want your folder be)
git clone copiedLink
```

#How to do stuff
```
Open Git Bash (where your gitRepository folder is)
git pull
Do some work on LtNSO.tex
Save
Open Git Bash
git status
git add LtNSO.tex
git commit -m "message about your changes"
git push
if(git push == error)
{
	git pull
	if(mergeFailed == true)
	{
		mergeManually in LtNSO.tex
		git commit -m "merge"
	}
	git push
}
```