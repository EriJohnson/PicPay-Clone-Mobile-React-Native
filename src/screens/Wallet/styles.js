import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.ScrollView`
  background: #000;
  flex: 1;
`

export const Header = styled(LinearGradient)`
  height: 300px;
`

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const BalanceContainer = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`

export const Value = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: 200;
`
export const Bold = styled.Text`
  font-weight: bold;
`

export const EyeButton = styled.TouchableOpacity`
  margin-left: 8px;
`

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: rgba(255, 255, 2550, 0.6);
  width: 144px;
  height: 44px;
  border-radius: 24px;
  justify-content: center;
  margin: 0 8px;
`
export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
`
export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`
export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`

export const PaymentMethods = styled.View`
  margin-top: 24px;
  padding: 0 16px;
`
export const PaymentMethodsTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
  color: #8e8e93;
`

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 8px;
`
export const CardBody = styled.View`
  flex-direction: row;
`

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`
export const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`
export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 16px;
`

export const Img = styled.Image`
  width: 64px;
`

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`
export const AddLabel = styled.Text`
  color: #0bd060;
  font-weight: bold;
  margin-left: 16px;
  font-size: 20px;
`

export const UseTicketContainer = styled.View`
  align-items: center;
  margin: 24px 0;
`
export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`

export const UseTicketLabel = styled.Text`
  color: #0bd060;
  font-weight: bold;
  margin-left: 16px;
  font-size: 16px;
  text-decoration: underline;
`
