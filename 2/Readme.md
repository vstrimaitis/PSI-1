#How to do stuff
```
Open Git Bash
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