import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  attendenceContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
    overflow: 'hidden',
  },
  dashboardContainer: {
    marginHorizontal: 16,
    marginTop:28,
  },
  dashboardTextContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  quickActionsContainer: {
    marginHorizontal: 16,
    marginTop:28,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  quickActionsTextContainer: {
    flexDirection: 'row',
    gap: 16,
  },

  container: {
    flex: 1, },

  scrollViewContent: {
    flexGrow: 1, 
    marginBottom: 120,
  },
  lowerNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

});

export default styles;
