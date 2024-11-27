import { supabase } from '../lib/supabase';

export const getUserData = async (userId) => {
  try {
    const { data, error } = await supabase.from('profiles').select().eq('id', userId).single();
    if (error) {
      return { success: false, msg: error.message };
    }

    return { success: true, msg: data };
  } catch (error) {
    console.log('error', error);
    return { success: false, msg: error.message };
  }
};
