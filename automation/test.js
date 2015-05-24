function run(ctx, input, params) {
  
  var docs = Seam.GetSelectedDocuments(input, {});

  if(docs.length > 2){
    var index;
    for (index = 0; index < docs.length; ++index) {
        Document.SetProperty(docs[index], {
          /*required:true - type: string*/
          'xpath': "dc:title" ,
          /*required:false - type: boolean*/
          'save': true,
          /*required:false - type: serializable*/
          'value': "test"
    });
  }
  WebUI.Refresh(input, {});
  } else {
    WebUI.AddMessage(input, {
	    'message': "Jolli Bee Message" ,
	    'severity': "WARN"
    });
  }
}
