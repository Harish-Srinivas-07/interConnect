// store/internshipAtoms.js
import { atom } from "jotai";

export const sessionAtom = atom(null);

export const internshipsAtom = atom([]);
export const fetchInternshipsAtom = atom(null, async (get, set) => {
  const session = get(sessionAtom);
  if (!session) return;

  const { data, error } = await supabase
    .from("internship")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    const internships = data.map((item) => new Internship(item));
    set(internshipsAtom, internships);
  }
});


export class Internship {
  constructor(data) {
    this.id = data.id;
    this.createdAt = data.created_at;
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
    this.startDate = data.start_date;
    this.endDate = data.end_date;
    this.stipend = data.stipend;
    this.skillsReq = data.skills_req;
    this.type = data.type;
    this.openings = data.openings;
    this.employerId = data.employer_id;
  }
}
