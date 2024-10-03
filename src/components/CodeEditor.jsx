import { Box, HStack,Input, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import Output from "./Output";

const CodeEditor = () =>{
    

    const {value, setvalue} = useState('');
    const editorRef = useRef();

    const[posCount, setPosCount] = useState('0');
    const[negCount, setNegCount] = useState('0');
    const[excCount, setExcCount] = useState('0');

    const onMount = (editor) =>{
        editorRef.current =editor;
        editor.focus();
    }
 
    return (
        <Box>
            <HStack spacing={4}>
                <Box w='50%'>
                    <Text mb={2} fontSize="lg">
                        Java Code :
                    </Text>
                    <HStack spacing={4}>
                    <Input mb={2} onChange={(data) => setPosCount(data.target.value)} placeholder='No of positive test' />
                    <Input mb={2} onChange={(data) => setNegCount(data.target.value)} placeholder='No of negative test' />
                    <Input mb={2} onChange={(data) => setExcCount(data.target.value)} placeholder='No of exception test' />
                    </HStack>
                    <Editor 
                        height="75vh" 
                        theme="vs-dark"
                        language="java" 
                        defaultValue="// paste your java code here" 
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setvalue(value)}
                    />;
                </Box>
                <Output editorRef={editorRef} positive ={posCount} negative = {negCount} exception = {excCount} />
            </HStack>
           
        </Box>
    );
};

export default CodeEditor;