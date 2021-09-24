import parseTemplate from "./parseTemplate";
import renderTemplate from "./renderTemplate";

window.MyTemplateEngine = {
    render: function(template, data){
        // step 1 parse template
        let tokens = parseTemplate(template)
        console.log('index:', tokens)

        // step 2 get string by tokens and data
        return renderTemplate(tokens, data)
    }
}