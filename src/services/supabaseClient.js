import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL and Anon Key must be defined in your .env file"
  );
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUp = async (email, password, onSuccess, onError) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Supabase Auth Error:", error);
      onError(error.message || "Signup failed");
    } else {
      onSuccess(data);
    }
  } catch (err) {
    console.error("Unexpected signup error:", err);
    onError("Check your internet connection or try again later.");
  }
};

export const createStudent = async ({
  email,
  full_name,
  college,
  degree,
  stream,
  year_start,
  year_end,
  resume_url,
}) => {
  if (!email || !full_name || !college || !degree || !stream) {
    throw new Error("All fields are required");
  }
  if (!year_start || !year_end) {
    throw new Error("Year start and end are required");
  }
  const { data, error } = await supabase.rpc("create_student_user", {
    emailid: email,
    full_name,
    college,
    degree,
    stream,
    year_start,
    year_end,
    resume_url,
  });

  if (error) {
    console.error("RPC error:", error);
    throw error;
  }

  console.log("RPC response data:", data);
  return data;
};
