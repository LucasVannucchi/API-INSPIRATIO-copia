export interface Patients{
    patients: [{ 
        type: String, 
        ref: String,
        psyco: [{ type: String, required: true }],
      }],
}