// src/services/signOutService.js
import { supabase } from '../lib/supabase';

export const signOutService = async (setAuth, Alert) => {
  try {
    setAuth(null);
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert('Sign Out Error', error.message);
      return false;
    }
  } catch (err) {
    Alert.alert('Unexpected Error', err.message);
    return false;
  }
  return true;
};
