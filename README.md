# sharp-error-output
## Demonstrate problems with apparent error message leak

### When I process a folder of images with sharp to create deep zoom image data (uncompressed) and the deep zoom output already exists, the error object sometimes contains error messages from other sharp instances/operations.  The behavior is not consistent--sometimes the errant data shows up in different places, but in my testing with the included dataset it almost always has at least a couple incorrect/leaked error messages during the run.

### I've tested on Windows 7 x64 as well as Ubuntu 16.04, with Node 8.2.1 and the of course the latest version of sharp (0.18.2).  The issue showed up in both environments for me, which leads me to believe it is either actually a bug or I'm completely doing something wrong in the code.

### Note that the hi-res image data included is public domain (obtained from http://www.metmuseum.org and http://gratisography.com) and is about 86MB in total.  I wanted to make sure there was a sufficiently large dataset to demonstrate the odd errors especially if there is some type of concurrency-related bug at play.

### Below is output from my machine for 8 successive runs of the app (after the initial run that populates the zoom data into the output folder).  As you can see, there are a lot of instances where the error object contains a message for a different operation.  Occasionally a single error object contains messages for as many as 3 or more operations.  You can easily see the lines that contain bad info because there should only be one line per error (but below you can see many instances where there are multiple error messages printed together).

```
dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.95s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: 423H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.95s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.96s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: 423H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.96s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.95s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: 423H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.96s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 379H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/379H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists

error: 411H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/411H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 423H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/423H_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP839249.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.96s.

dlong@baseship MINGW64 /c/local/code/sharp-error-output (master)
$ yarn start
yarn start v0.28.4
$ node app.js
Generating zoom data [339H.jpg]
Generating zoom data [343H.jpg]
Generating zoom data [373H.jpg]
Generating zoom data [379H.jpg]
Generating zoom data [387H.jpg]
Generating zoom data [394H.jpg]
Generating zoom data [411H.jpg]
Generating zoom data [415H.jpg]
Generating zoom data [419H.jpg]
Generating zoom data [423H.jpg]
Generating zoom data [426H.jpg]
Generating zoom data [4439.jpg]
Generating zoom data [DP130194.jpg]
Generating zoom data [DP130268.jpg]
Generating zoom data [DP142360.jpg]
Generating zoom data [DP14837.jpg]
Generating zoom data [DP168557.jpg]
Generating zoom data [DP215858.jpg]
Generating zoom data [DP3341.jpg]
Generating zoom data [DP364475.jpg]
Generating zoom data [DP800946.jpg]
Generating zoom data [DP803821.jpg]
Generating zoom data [DP821399.jpg]
Generating zoom data [DP839249.jpg]
Generating zoom data [DP874142.jpg]
Generating zoom data [DT4713.jpg]
Generating zoom data [MM1800.jpg]
error: 339H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/339H_files exists

error: 373H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/373H_files exists

error: 343H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/343H_files exists

error: 387H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/387H_files exists

error: 394H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/394H_files exists

error: 415H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/415H_files exists

error: 4439.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/4439_files exists

error: DP130194.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130194_files exists

error: DP130268.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP130268_files exists

error: DP142360.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP142360_files exists

error: 419H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/419H_files exists

error: 426H.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/426H_files exists

error: DP3341.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP3341_files exists

error: DP215858.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP215858_files exists

error: DP800946.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP800946_files exists

error: DP803821.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP803821_files exists

error: DP821399.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP821399_files exists

error: DP14837.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP14837_files exists

error: DP168557.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP168557_files exists

error: DT4713.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DT4713_files exists

error: DP364475.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP364475_files exists

error: DP874142.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/DP874142_files exists
dzsave: output directory C:\local\code\sharp-error-output\data\output/DP839249_files exists

error: MM1800.jpg: dzsave: output directory C:\local\code\sharp-error-output\data\output/MM1800_files exists

Done in 0.95s.
```