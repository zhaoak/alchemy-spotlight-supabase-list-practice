const supabaseUrl = 'https://sagftzksyhlnwvwqislb.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2Z0emtzeWhsbnd2d3Fpc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgxMzcsImV4cCI6MTk4MzY4NDEzN30.YKP0xHsE1Oo9sKmU0QIHWN5YTQFCCQYfW4p1zJ1iOtw';

const client = supabase.createClient(supabaseUrl, supabaseKey);

export async function fetchData(table) {
    const query = client.from(table).select();
    const response = await query;
    if (response.error) {
        console.error(response);
        return;
    }
    return response.data;
}
