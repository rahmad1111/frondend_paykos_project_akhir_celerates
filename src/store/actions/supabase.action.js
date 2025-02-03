/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';
const supaUrl = process.env.REACT_APP_SUPABASE_URL;
const supaBkt = "https://aeqnhroifvvumkducbhj.supabase.co/storage/v1/object/public/bukti_pembayaran/";
const supaKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcW5ocm9pZnZ2dW1rZHVjYmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNDI3OTYsImV4cCI6MjA0ODgxODc5Nn0.7X-MFP-HXGZn_WJCKrbhBRUnkHH0LfM17IUHKq2G-8w";
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