Host: localhost
-- Generation Time: Dec 28, 2017 at 07:35 PM
-- Server version: 5.7.17
-- PHP Version: 5.6.30-1+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goal_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_id`, `name`, `username`, `password`) VALUES
(2, 'Shadab', 'imshadabsaifi', 'p'),
(3, 'Swati', 'imswati', 'p'),
(4, 'Aditya', 'imaditya', 'p');

-- --------------------------------------------------------

--
-- Table structure for table `user_goal`
--

CREATE TABLE `user_goal` (
  `goal_id` int(5) NOT NULL,
  `goal_assigned_to` int(5) NOT NULL,
  `goal_title` varchar(100) NOT NULL,
  `goal_description` varchar(500) NOT NULL,
  `goal_start_date` datetime NOT NULL,
  `goal_end_date` datetime NOT NULL,
  `goal_assigned_by` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_goal`
--

INSERT INTO `user_goal` (`goal_id`, `goal_assigned_to`, `goal_title`, `goal_description`, `goal_start_date`, `goal_end_date`, `goal_assigned_by`) VALUES
(1, 2, 'Goal Management System', 'Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS ', '2017-12-28 00:00:00', '2017-12-29 00:00:00', 2),
(2, 2, 'Goal Management System - Goal Ui', 'Design UI for Goal', '2017-12-28 00:00:00', '2017-12-30 00:00:00', 2),
(28, 3, 'User Goal Management Page', 'Design a Goal Management page for User to change progress and do comments', '2017-12-29 00:00:00', '2017-12-30 00:00:00', 2),
(29, 4, 'Back-end service for Goal', 'Make services for edit, reassign, delete a goal', '2018-01-01 00:00:00', '2018-01-02 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `role_id` int(2) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`role_id`, `role`) VALUES
(1, 'ADMIN'),
(2, 'USER'),
(3, 'POC');

-- --------------------------------------------------------

--
-- Table structure for table `user_role_mapping`
--

CREATE TABLE `user_role_mapping` (
  `user_id` int(11) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role_mapping`
--

INSERT INTO `user_role_mapping` (`user_id`, `role`) VALUES
(3, 2),
(4, 2),
(2, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `user_goal`
--
ALTER TABLE `user_goal`
  ADD PRIMARY KEY (`goal_id`),
  ADD KEY `frk_assigned_by` (`goal_assigned_by`),
  ADD KEY `frk_assigned_to` (`goal_assigned_to`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `user_role_mapping`
--
ALTER TABLE `user_role_mapping`
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `fk_role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_goal`
--
ALTER TABLE `user_goal`
  MODIFY `goal_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `role_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_goal`
--
ALTER TABLE `user_goal`
  ADD CONSTRAINT `frk_assigned_by` FOREIGN KEY (`goal_assigned_by`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `frk_assigned_to` FOREIGN KEY (`goal_assigned_to`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `user_role_mapping`
--
ALTER TABLE `user_role_mapping`
  ADD CONSTRAINT `fk_role` FOREIGN KEY (`role`) REFERENCES `user_role` (`role_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
