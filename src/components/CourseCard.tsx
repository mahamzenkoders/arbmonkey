'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import {
  Search,
  HandCoins,
  ChartNoAxesCombined,
  BadgeDollarSign,
  Wallet,
  Landmark,
  Coins,
  ChartCandlestick,
  Ticket,
  Tag,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Formik, Field, Form, FormikValues } from 'formik';

const initialValues = {
  title: '',
  description: '',
};

type Course = {
  id: number;
  title: string;
  description: string;
  lesson: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const generateUniqueId = (existingIds: number[]): number => {
  let newId = existingIds.length ? Math.max(...existingIds) + 1 : 1;
  while (existingIds.includes(newId)) {
    newId += 1;
  }
  return newId;
};

const CourseCard = () => {
  const [isClient, setIsClient] = useState(false);
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: 'Promotion Rule Course',
      description: 'Learn how to use and find promotions',
      lesson: 'Lesson 1',
      icon: HandCoins,
    },
    {
      id: 2,
      title: 'Reduce Risk Course',
      description: 'Learn how to reduce risk to secure profits',
      lesson: 'Lesson 2',
      icon: ChartNoAxesCombined,
    },
    {
      id: 3,
      title: 'Free Bet Calculator Course',
      description: 'Learn how to use our free bet calculator',
      lesson: 'Lesson 3',
      icon: BadgeDollarSign,
    },
    {
      id: 4,
      title: 'Site Credit Calculator Course',
      description: 'Learn how to use our site credit bet calculator',
      lesson: 'Lesson 4',
      icon: Wallet,
    },
    {
      id: 5,
      title: 'Risk Free Bet Calculator Course',
      description: 'Learn how to use our risk free bet calculator',
      lesson: 'Lesson 5',
      icon: Landmark,
    },
    {
      id: 6,
      title: 'Arbitrage Finder Course',
      description: 'Learn how to use our arbitrage finder',
      lesson: 'Lesson 6',
      icon: Coins,
    },
    {
      id: 7,
      title: 'Qualifying Calculator Course',
      description: 'Learn how to use our qualifying bet calculator',
      lesson: 'Lesson 7',
      icon: ChartCandlestick,
    },
    {
      id: 8,
      title: 'Get More Free Play Course',
      description: 'Learn how to get more free play',
      lesson: 'Lesson 8',
      icon: Tag,
    },
    {
      id: 9,
      title: 'VIP Tickets Course',
      description: 'Learn how to get free VIP tickets',
      lesson: 'Lesson 9',
      icon: Ticket,
    },
  ]);
  const [search, setSearch] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search),
  );

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    const existingIds = courses.map(course => course.id);
    const newId = generateUniqueId(existingIds);

    setCourses(prevCourses => [
      ...prevCourses,
      {
        id: newId,
        title: values.title,
        description: values.description,
        lesson: `Lesson ${newId}`,
        icon: HandCoins,
      },
    ]);

    resetForm();
    setDialogOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className='m-6 flex flex-col'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl mx-10'>Courses</h1>
          <p className='text-gray-400 text-sm mt-2 mx-10'>
            Welcome to the courses. Search or click a course below to get
            started!
          </p>
        </div>
        <Dialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        >
          <DialogTrigger>
            <Button className='bg-purple-400 text-white p-6'>
              Add Course +
            </Button>
          </DialogTrigger>
          <DialogContent className='bg-white'>
            <DialogHeader>
              <DialogTitle>Course Addition</DialogTitle>
              <DialogDescription>Add a new course</DialogDescription>
            </DialogHeader>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className='m-2'>
                    <Label className='mb-4'>Title:</Label>
                    <Field
                      as={Input}
                      name='title'
                      placeholder='Title'
                    />
                  </div>
                  <div className='m-2'>
                    <Label className='mb-4'>Description:</Label>
                    <Field
                      as={Input}
                      name='description'
                      placeholder='Description'
                    />
                  </div>
                  <div className='flex justify-center mt-7'>
                    <Button
                      type='submit'
                      className='bg-purple-400 text-white'
                      disabled={isSubmitting}
                    >
                      Add Course
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
      <div className='mx-9 my-4 search__input border-[2px] border-solid border-slate-100 flex flex-row items-center gap-5 p-1 rounded-[15px]'>
        <input
          type='text'
          placeholder='Enter your keywords'
          className='bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3'
          value={search}
          onChange={handleSearchChange}
        />
        <Search />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-10 mt-4'>
        {filteredCourses.map(course => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>
                <course.icon className='text-purple-400 h-10 w-10 mt-4' />
              </CardTitle>
              <CardDescription className='text-purple-400 font-medium'>
                {course.lesson}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h1 className='text-2xl font-bold text-blue-950'>
                  {course.title}
                </h1>
                <p className='text-gray-400 text-sm mt-2'>
                  {course.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
