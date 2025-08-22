import { Metadata } from 'next'
import { PageEditor } from '@/components/page-editor'
import { createClient } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our platform'
}

export default async function PrivacyPolicyPage() {
  const supabase = createClient()
  if (!supabase) return null;
  
  // Fetch the current privacy policy content
  const { data } = await supabase
    .from('pages')
    .select('privacy_policy')
    .limit(1)
    .maybeSingle()

  // Type assertion to help TypeScript understand the data structure
  const pageData = data as { privacy_policy: string | null } | null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        <PageEditor 
          column="privacy_policy"
          initialContent={pageData?.privacy_policy || null}
        />
      </div>
    </div>
  )
} 