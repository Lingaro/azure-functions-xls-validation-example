# azure-functions-xls-validation-example
## Running example on Azure
1. Create function app with storage account.
1. Create blob container named _xls_.
1. Create new function and choose "Start from source control".
   * Click _Setup_ and choose this GitHub repository.
1. Open Power shell console in Kudu and execute:
```
cd \home\site\wwwroot\name_of_function
npm update
```

## Testing:
1. Put files from _examples_ folder into _in_ folder in _xls_ blob container.
1. All valid files will be copied into _valid_ folder on storage.
1. All invalid files with will be placed in _invalid_ folder. Also _invalidFile-errors.txt_ will be created there.

## Known issues with Node.js
* Generating custom output file names is not supported now in storage bindings (it's available only in C#). So invalid and invalid-errors.txt files have different guid prefixes.
