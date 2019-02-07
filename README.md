# schematronValidator.js

Documentation under construction.

Detailed documentation is located [here](https://github.com/ucalis/SchematronValidator).

## 1. Installation

```
npm install schematronValidator
```

Generate service:
```
npm start
```

## 2. Quick example



## Schematron Validation Example 

```javascript
var fs = require('file-system');
var file=fs.readFileSync('path-of-validated-file', 'utf8');
 var errors = []; 
	try {
 		 $.ajax({
	      type: 'post',
	      url: "http://*/schematronValidator/doValidation",
	      data: {file: file},
	      success: function(data){
		errors= data;
	      },
	      error: function(req, status, err) {
		console.error("Error during file validation", status, err);
	      }
	    });
            return errors;
	}
	catch(e) {
		console.log(e);
		return null;
	}
