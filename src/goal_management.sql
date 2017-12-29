-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 29, 2017 at 05:17 PM
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
-- Table structure for table `goal_comments`
--

CREATE TABLE `goal_comments` (
  `comment_id` int(5) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `goal_id` int(5) NOT NULL,
  `comment_by` int(5) NOT NULL,
  `comment_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goal_comments`
--

INSERT INTO `goal_comments` (`comment_id`, `comment`, `goal_id`, `comment_by`, `comment_date`) VALUES
(1, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.', 1, 3, '2017-12-29 12:25:56'),
(2, 'Some quick example text to build on the card title and make up the bulk of the card\'s content. and make up the bulk of the card\'s ', 1, 3, '2017-12-29 12:25:56');

-- --------------------------------------------------------

--
-- Table structure for table `goal_progress`
--

CREATE TABLE `goal_progress` (
  `goal_id` int(5) NOT NULL,
  `progress` enum('0','10','20','30','40','50','60','70','80','90','100') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goal_progress`
--

INSERT INTO `goal_progress` (`goal_id`, `progress`) VALUES
(1, '10'),
(2, '20'),
(3, '0'),
(5, '0');

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
(2, 'Shadab', 'imshadab', 'p'),
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
(1, 3, 'User Autherisation', 'Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS Done Authorization in GMS ', '2017-12-28 00:00:00', '2017-12-29 00:00:00', 2),
(2, 3, 'Goal Management System - Goal Ui', 'Design UI for Goal', '2017-12-28 00:00:00', '2017-12-30 00:00:00', 2),
(3, 3, 'User Goal Management Page', 'Design a Goal Management page for User to change progress and do comments', '2017-12-29 00:00:00', '2017-12-30 00:00:00', 2),
(4, 4, 'Back-end service for Goal', 'Make services for edit, reassign, delete a goal', '2018-01-01 00:00:00', '2018-01-02 00:00:00', 2),
(5, 3, 'User progress graph', 'Make a user progress graph on user home page', '2017-12-29 00:00:00', '2017-12-30 00:00:00', 2);

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
-- Indexes for table `goal_comments`
--
ALTER TABLE `goal_comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `fr_goal_id` (`goal_id`),
  ADD KEY `fr_comment_by` (`comment_by`);

--
-- Indexes for table `goal_progress`
--
ALTER TABLE `goal_progress`
  ADD UNIQUE KEY `goal_id` (`goal_id`);

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
-- AUTO_INCREMENT for table `goal_comments`
--
ALTER TABLE `goal_comments`
  MODIFY `comment_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_goal`
--
ALTER TABLE `user_goal`
  MODIFY `goal_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `role_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `goal_comments`
--
ALTER TABLE `goal_comments`
  ADD CONSTRAINT `fr_comment_by` FOREIGN KEY (`comment_by`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fr_goal_id` FOREIGN KEY (`goal_id`) REFERENCES `user_goal` (`goal_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `goal_progress`
--
ALTER TABLE `goal_progress`
  ADD CONSTRAINT `fr_goal_id_progress` FOREIGN KEY (`goal_id`) REFERENCES `user_goal` (`goal_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

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
