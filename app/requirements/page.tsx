'use client';

import { Layout } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, Filter, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const requirements = [
  {
    id: 'REQ-001',
    title: 'User Authentication',
    type: 'Functional',
    priority: 'High',
    status: 'Approved',
  },
  {
    id: 'REQ-002',
    title: 'Document Upload',
    type: 'Functional',
    priority: 'High',
    status: 'In Review',
  },
  {
    id: 'REQ-003',
    title: 'System Performance',
    type: 'Non-Functional',
    priority: 'Medium',
    status: 'Draft',
  },
];

const priorityColors = {
  High: 'text-red-500 bg-red-50 dark:bg-red-950',
  Medium: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950',
  Low: 'text-green-500 bg-green-50 dark:bg-green-950',
};

const statusColors = {
  Approved: 'text-green-500 bg-green-50 dark:bg-green-950',
  'In Review': 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950',
  Draft: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
};

export default function RequirementsPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Requirements</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Requirement
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search requirements..."
                    className="pl-8"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requirements.map((req) => (
                  <TableRow key={req.id}>
                    <TableCell className="font-medium">{req.id}</TableCell>
                    <TableCell>{req.title}</TableCell>
                    <TableCell>{req.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={priorityColors[req.priority as keyof typeof priorityColors]}
                      >
                        {req.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={statusColors[req.status as keyof typeof statusColors]}
                      >
                        {req.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}