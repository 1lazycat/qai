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
import { Download, Plus } from 'lucide-react';

const testCases = [
  {
    id: 1,
    name: 'User Login Validation',
    priority: 'High',
    status: 'Passed',
    lastRun: '2024-03-20',
  },
  {
    id: 2,
    name: 'Document Upload Size Check',
    priority: 'Medium',
    status: 'Failed',
    lastRun: '2024-03-19',
  },
  {
    id: 3,
    name: 'Requirements Export',
    priority: 'Low',
    status: 'Pending',
    lastRun: '-',
  },
];

const priorityColors = {
  High: 'text-red-500 bg-red-50 dark:bg-red-950',
  Medium: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950',
  Low: 'text-green-500 bg-green-50 dark:bg-green-950',
};

const statusColors = {
  Passed: 'text-green-500 bg-green-50 dark:bg-green-950',
  Failed: 'text-red-500 bg-red-50 dark:bg-red-950',
  Pending: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
};

export default function TestCasesPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Test Cases</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Test Case
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Test Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testCases.map((testCase) => (
                  <TableRow key={testCase.id}>
                    <TableCell className="font-medium">{testCase.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={priorityColors[testCase.priority as keyof typeof priorityColors]}
                      >
                        {testCase.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={statusColors[testCase.status as keyof typeof statusColors]}
                      >
                        {testCase.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{testCase.lastRun}</TableCell>
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