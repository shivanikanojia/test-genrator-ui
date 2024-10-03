import { Box, Menu, MenuButton,MenuList, MenuItem, Button } from "@chakra-ui/react";

const NumberOfTestSelector = ({count, onSelect}) => {
    return (
        <Box mb={4} >
            <Menu>
                <MenuButton as={Button} >
                {count}
                </MenuButton>
                <MenuList>
                    <MenuItem key='1' onClick={() => onSelect('1')}>1</MenuItem>
                    <MenuItem key='2' onClick={() => onSelect('2')}>2</MenuItem>
                    <MenuItem key='3' onClick={() => onSelect('3')}>3</MenuItem>
                    <MenuItem key='4' onClick={() => onSelect('4')}>4</MenuItem>
                    <MenuItem key='5' onClick={() => onSelect('5')}>5</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NumberOfTestSelector;