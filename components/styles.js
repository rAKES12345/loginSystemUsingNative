import styled from 'styled-components/native';

export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    red: 'red',
    tertiary: '#F0F0F0',   // Example tertiary color
    darkLight: '#333333',  // Example dark/light color
    brand: '#007BFF',      // Brand color (same as primary in your example)
    green: '#28A745'       // Example green color
};

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.brand};
    padding: 10px;
`;

// Define PageLogo if you're using it
export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${Colors.red};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;
