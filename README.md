# Sketches
This website is available on [Github Pages](https://mrigakshipandey.github.io/sketches/)

Steps to deploy are from [here](https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879)

## Troubleshooting
- Fixing 404 error from [here](https://stackoverflow.com/questions/68497926/how-can-i-fix-failing-to-load-resource-status-404-github-pages), changed build script to -
```
"build:pages": "ng build --configuration production --output-path docs --base-href /sketches/"
```
- Changed image path to start with './'
