/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';
const supaUrl = process.env.REACT_APP_SUPABASE_URL;
const supaBkt = process.env.REACT_APP_SUPABASE_BUCKET;
const supaKey =process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supaUrl, supaKey, supaBkt);
export default supabase;

export const imgSupabase = async (imgFile, file) => {
    try {
        const { data, error } = await supabase.storage
        .from('bukti_pembayaran')
        .upload(imgFile, file, {
            contentType: file.type,
            upsert: false
        }) ;
        if (error) {
            console.error('Gagal mengunggah file:', error);
            throw error;
        }
        const publicUrlResponse = supabase.storage
            .from('bukti_pembayaran')
            .getPublicUrl(data.path);

        return publicUrlResponse.data.publicUrl;
    } catch (error) {
        console.error('Gagal mengunggah gambar file ke Supabase :', error);
        throw error;
    }
}