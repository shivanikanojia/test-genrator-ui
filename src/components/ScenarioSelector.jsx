import { Box, Text, Menu, MenuButton,MenuList, MenuItem, Button } from "@chakra-ui/react";

const ScenarioSelector = ({scenario, onSelect}) => {
    return (
        <Box mb={4} >
            <Menu>
                <MenuButton as={Button} >
                {scenario}
                </MenuButton>
                <MenuList>
                    <MenuItem key='Positive' onClick={() => onSelect('Positive')}>Positive</MenuItem>
                    <MenuItem key='Negative' onClick={() => onSelect('Negative')}>Negative</MenuItem>
                    <MenuItem key='Both' onClick={() => onSelect('Both')}>Both</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default ScenarioSelector;