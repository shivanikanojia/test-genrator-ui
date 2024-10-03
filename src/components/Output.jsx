import { Box, Button, Text, useToast } from "@chakra-ui/react";
import {generateUnitTest} from "../api"
import { useState } from "react";
import { Editor } from "@monaco-editor/react";

const Output = ({editorRef, positive, negative, exception}) =>{

    const toast = useToast();
    const [output, setOutput] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const generateTest =async() =>{

        var sourceCode = 'Write junit test case for ';
        if('0' != positive ||  '0' != negative || '0' != exception){
            sourceCode = sourceCode + positive + ' postive scenario '
            + negative + ' negatvie scenario and ' 
            + exception + ' exception scenario';
        }
        sourceCode = sourceCode + ' for below class \n' + editorRef.current.getValue(null);
                        
        if(!sourceCode) return;
        try {
            setIsLoading(true);
            const {data:result} = await generateUnitTest(sourceCode);
            console.log(result);
            setOutput(result.promptResponse);
        } catch (error) {
            console.log(error);
            toast({
                title:"An error occured!!",
                description: error.message || "Something went wrong",
                status:"error",
                duration:6000
            });
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">
                Output :
            </Text>
            <Button 
                variant="outline" 
                colorScheme="green" 
                mb={4} 
                isLoading={isLoading}
                onClick={generateTest}>Generate Unit Test
            </Button>

            <Editor 
                        height="75vh" 
                        theme="vs-dark"
                        language="java" 
                        defaultValue="// Click 'Generate Unit Test' to see the result" 
                        value= { output}
                        options={{readOnly:true}}
                    />;

        </Box>
    );
};
export default Output;