-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 12:26 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proto2023`
--

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `numPermis` varchar(8) NOT NULL,
  `idModele` int(11) NOT NULL,
  `dateTest` datetime NOT NULL,
  `securite` int(11) NOT NULL,
  `conduite` int(11) NOT NULL,
  `confort` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `evaluation`
--

INSERT INTO `evaluation` (`numPermis`, `idModele`, `dateTest`, `securite`, `conduite`, `confort`) VALUES
('12/75478', 15, '2024-02-22 00:00:00', 5, 5, 5),
('12/75478', 26, '2024-02-21 00:00:00', 3, 4, 5),
('12/75478', 38, '2024-02-21 00:00:00', 3, 5, 4),
('21/12345', 15, '2022-11-19 11:00:02', 1, 1, 1),
('21/12345', 26, '2022-11-20 11:00:21', 5, 5, 5),
('22/55555', 15, '2022-11-21 10:59:14', 3, 2, 4),
('22/55555', 26, '2024-02-22 00:00:00', 5, 5, 3),
('22/55555', 38, '2024-02-22 00:00:00', 5, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `modelevoiture`
--

CREATE TABLE `modelevoiture` (
  `idModele` int(11) NOT NULL,
  `libelle` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modelevoiture`
--

INSERT INTO `modelevoiture` (`idModele`, `libelle`) VALUES
(38, 'WALLYS 216'),
(26, 'WALLYS 619'),
(15, 'WALLYS IRIS');

-- --------------------------------------------------------

--
-- Table structure for table `testeur`
--

CREATE TABLE `testeur` (
  `numPermis` varchar(8) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `genre` varchar(1) NOT NULL,
  `idVille` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testeur`
--

INSERT INTO `testeur` (`numPermis`, `nom`, `prenom`, `genre`, `idVille`) VALUES
('12/75478', 'abdelaziz', 'masmoudi', 'M', 3),
('21/12345', 'Barhoumi', 'Ahmed', 'M', 3),
('22/55555', 'Mouradi', 'Ines', 'F', 2),
('23/66666', 'Ayari', 'Mounir', 'M', 3),
('33/44444', 'Jebri', 'Mouna', 'F', 1),
('58/98765', 'Jouini', 'Ramzi', 'M', 2);

-- --------------------------------------------------------

--
-- Table structure for table `ville`
--

CREATE TABLE `ville` (
  `idville` int(11) NOT NULL,
  `libville` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ville`
--

INSERT INTO `ville` (`idville`, `libville`) VALUES
(1, 'gafsa'),
(2, 'kef'),
(3, 'sousse'),
(4, 'tunis');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`numPermis`,`idModele`),
  ADD KEY `idModele` (`idModele`);

--
-- Indexes for table `modelevoiture`
--
ALTER TABLE `modelevoiture`
  ADD PRIMARY KEY (`idModele`),
  ADD UNIQUE KEY `libelle` (`libelle`);

--
-- Indexes for table `testeur`
--
ALTER TABLE `testeur`
  ADD PRIMARY KEY (`numPermis`),
  ADD KEY `c1` (`idVille`);

--
-- Indexes for table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`idville`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ville`
--
ALTER TABLE `ville`
  MODIFY `idville` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `evaluation_ibfk_1` FOREIGN KEY (`numPermis`) REFERENCES `testeur` (`numPermis`),
  ADD CONSTRAINT `evaluation_ibfk_2` FOREIGN KEY (`idModele`) REFERENCES `modelevoiture` (`idModele`),
  ADD CONSTRAINT `evaluation_ibfk_3` FOREIGN KEY (`numPermis`) REFERENCES `testeur` (`numPermis`),
  ADD CONSTRAINT `evaluation_ibfk_4` FOREIGN KEY (`idModele`) REFERENCES `modelevoiture` (`idModele`);

--
-- Constraints for table `testeur`
--
ALTER TABLE `testeur`
  ADD CONSTRAINT `c1` FOREIGN KEY (`idVille`) REFERENCES `ville` (`idville`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
