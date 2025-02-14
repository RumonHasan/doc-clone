import { Editor } from './editor';
import { Toolbar } from './toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFB]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;

// from next js 15 dynamic routes are returned as promises
