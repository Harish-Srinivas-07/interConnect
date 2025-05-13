import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { sessionAtom, fetchInternshipsAtom } from "../models/internShip";
import { supabase } from "../services/supabaseClient";

const InternshipProvider = ({ children }) => {
  const setSession = useSetAtom(sessionAtom);
  const fetchInternships = useSetAtom(fetchInternshipsAtom);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      if (session) {
        fetchInternships();
      }
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          fetchInternships();
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [setSession, fetchInternships]);

  return children;
};

export default InternshipProvider;
