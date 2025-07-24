// app/utils/database.js

import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://zwlumzsmguealwerywgl.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3bHVtenNtZ3VlYWx3ZXJ5d2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNjI3NTYsImV4cCI6MjA2ODkzODc1Nn0.HiM8lvOffgspxT9f30v73kO35Nm2wUy_mDycm3JD1to")

export default supabase