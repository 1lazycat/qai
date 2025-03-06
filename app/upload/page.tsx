'use client';

import { Layout } from '@/components/layout';
import { FileUploader } from '@/components/file-uploader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function UploadPage() {
  const [url, setUrl] = useState('');

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle URL submission
    console.log('URL submitted:', url);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Document Upload</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <FileUploader />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add URL</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUrlSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="url"
                    placeholder="Enter document URL"
                    className="pl-8"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <Button type="submit">Add</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add document list here */}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}