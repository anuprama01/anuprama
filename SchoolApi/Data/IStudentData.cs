﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public interface IStudentData
    {
        IEnumerable<Student> GetStudents();
    }
}
