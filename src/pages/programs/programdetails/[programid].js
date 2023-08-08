import { useRouter } from 'next/router';


const CourseDetails = () => {
  const router = useRouter();
  const { programid } = router.query;

  // 在这里可以根据 courseid 加载相应的课程信息

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {programid}</p>
      {/* 显示课程详细信息 */}
    </div>
  );
};

export default CourseDetails;
