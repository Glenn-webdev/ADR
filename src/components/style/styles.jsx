// component/style/myStyle.jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#90EE90',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceCard: {
    width: 400,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 12,
  },
  serviceTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    height: 200,
  },
  serviceCardImage:{
    width: 390, 
    height: 200, 
    borderRadius: 10,
    justifyContent:'center'

  },
    
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  containerSliding: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  swipableContainer: {
    flex: .8,
    justifyContent: 'center',
    alignItems: 'center',
  

  },

  contactDetails: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },




  icon: {
    width: 40,
    height: 40,
  },
  contactLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
