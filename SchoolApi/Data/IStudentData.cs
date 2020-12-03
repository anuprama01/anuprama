using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public interface IStudentData
    {
        IEnumerable<Student> GetStudents();


        Student Update(Student updatedStudent);


        Student Add(Student newStudent);

        Student Delete(int id);

    }
}
