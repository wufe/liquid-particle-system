$demoDistPath = "dist-demo"
if (Test-Path -Path $demoDistPath) {
    Remove-Item -Recurse -Force $demoDistPath
}
yarn demo:build:production
ssh do 'rm -rf /home/liquid.particles/*'
scp -r $demoDistPath/* do:/home/liquid.particles
ssh do 'chmod -R 777 /home/liquid.particles'